import axios from 'axios';

export function emailList() {
    return function (dispatch){
            return axios.get('https://5c5a21f9af3ff700140de477.mockapi.io/api/email')
                        .then(response => {   
                            dispatch({
                              type: 'EMAIL_LIST',
                              payload: response.data
                            })
                        })
    }
}

export function getEmailById(id) {
    return function (dispatch){
            return axios.get(`https://5c5a21f9af3ff700140de477.mockapi.io/api/email/${id}`)
                        .then(response => {   
                            dispatch({
                              type: 'EMAIL_BY_ID',
                              payload: response.data
                            })
                        })
    }
}



