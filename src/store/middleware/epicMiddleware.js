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
    static getDownloadData(actions$) {
        return actions$.ofType(AudioActions.GET_DOWNLOAD_DATA)
            .mergeMap((actions$) => {
                console.log("actions$.payload", actions$.payload);
                return Observable.ajax({
                    url: 'http://127.0.0.1:5000/downloadFile', method: 'POST', responseType: 'application/zip', body:
                    { fileNameList: JSON.parse(actions$.payload) },
                    headers: { "Content-Type": 'application/json' }
                })
                    .do((data) => {
                        console.log(" Download data >> ", data);
                    })
                    .pluck("response")
                    .switchMap((data) => {
                        return Observable.of(AudioActions.fileDownloadSuccessfully(data))
                    })
            })
    }

}   