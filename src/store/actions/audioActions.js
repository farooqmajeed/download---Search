export default class AudioActions {

    static GET_DATA = "GET_DATA";
    static GET_AUDIO_LIST_SUCCESSFULL = "GET_AUDIO_LIST_SUCCESSFULL";
    static GET_DOWNLOAD_DATA = "GET_DOWNLOAD_DATA";
    static DOWNLOAD_FILE_SUCCESSFULL = "DOWNLOAD_FILE_SUCCESSFULL";

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

    static getDownloadData(data) {
        return {
            type: AudioActions.GET_DOWNLOAD_DATA,
            payload: data
        }
    }
    static fileDownloadSuccessfully(downloadList) {
        return {
            type: AudioActions.DOWNLOAD_FILE_SUCCESSFULL,
            payload: downloadList
        }
    }

}
