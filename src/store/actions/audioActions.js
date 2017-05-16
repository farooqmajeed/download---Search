export default class AudioActions {

    static GET_DATA = "GET_DATA";
    static GET_AUDIO_LIST_SUCCESSFULL = "GET_AUDIO_LIST_SUCCESSFULL";
    static DOWNLOAD_FILE = "DOWNLOAD_FILE";

    static getData(data) {
        return {
            type: AudioActions.GET_DATA,
            payload: data
        }
    }
    static getAudioListSuccessfull(audioList) {
        return {
            type: AudioActions.GET_AUDIO_LIST_SUCCESSFULL,
            payload: audioList
        }
    }

}
