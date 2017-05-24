import AudioActions from '../actions/audioActions'

const INITIAL_STATE = {
    audioList: [],
    downloadList: []
}

function epicReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AudioActions.GET_AUDIO_LIST_SUCCESSFULL:
            return { ...state, audioList: action.payload }
            console.log("return state", state);

        case AudioActions.DOWNLOAD_FILE_SUCCESSFULL:
            return { ...state, downloadList: action.payload }
            console.log("return state", state);
        default:
            return state
    }
}
export default epicReducer;