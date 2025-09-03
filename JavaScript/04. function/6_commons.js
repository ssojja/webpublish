/**
 * commons 폴더에 저장된 자바스크립트 함수 임포트
 */
// default가 붙은 친구는 괄호 밖에 기재
import singleGugudan, { multiGugudan } from '../commons/gugudan.js';
// const singleGugudan = require('../commons/gugudan.js');

singleGugudan(3);
singleGugudan(7);
multiGugudan(3, 7); // 3 ~ 7단까지 출력