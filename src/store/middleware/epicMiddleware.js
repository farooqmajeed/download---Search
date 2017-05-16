import { Observable } from "rxjs"
import AudioActions from '../actions/audioActions'

export default class AudioListEpic {

    static getAudioData(actions$) {
        return actions$.ofType(AudioActions.GET_DATA)
            .mergeMap((actions$) => {
                return Observable.ajax({ url: 'http://127.0.0.1:5000/search', method: 'POST', responseType: 'audio/mp4', body: { fileList: actions$.payload } })
                    .do((data) => {
                        console.log("data >> ", data);
                    })
                    .pluck("response")
                    .switchMap((data) => {
                        return Observable.of(AudioActions.getAudioListSuccessfull(data))
                    })
            })
    }

}   