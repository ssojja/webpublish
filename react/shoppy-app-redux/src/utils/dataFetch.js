import axios from 'axios';

/**
 *  fetch 함수를 이용하여 데이터 가져오기
 */
export const fetchData = async (url) => {
    const response = await fetch(url);
    const jsonData = await response.json(); // json 타입으로 파싱
    return jsonData;
}

/**
 *  axios 함수를 이용하여 데이터 가져오기
 */
export const axiosData = async (url) => {
    const response = await axios.get(url);
    return response.data;
}

/**
 *  배열의 rows 그룹핑
 */
export const groupByRows = (array, number) => {
    // 출력 포맷 함수 : 한줄에 3개씩 출력!

    /* 방법(1) for문 이용하기 */
    // const rows = []; // [[{}, {}, {}], [{}, {}, {}], [{}]]
    // for(let i=0; i < array.length; i+=3){
    //     // const row = array.slice(i, i+3);   // 0 ~ 2, slice 새로운 배열 반환
    //     rows.push(array.slice(i, i+3));
    // }

    /* 방법(2) 누적합 이용하기 */
    const rows = array.reduce((acc, cur, idx) => {
        if(idx % number == 0) acc.push([cur])
        else acc[acc.length-1].push(cur);

        return acc;
    }, [])

    return rows;
}