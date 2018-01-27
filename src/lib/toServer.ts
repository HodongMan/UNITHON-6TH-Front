import axios from 'axios';

const kUrl = 'http://localhost';

export function getBoardList() {

    return axios.get(`${kUrl}/api/board/`);
}

export function getBoardContentAnalyzePretty(id: number) {

    return axios.get(`${kUrl}/api/board/analyze/${id}/pretty/`);
}

export function getBoardContentCollocationPretty(id: number) {

    return axios.get(`${kUrl}/api/board/collocation/${id}/pretty/`);
}