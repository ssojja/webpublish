import React from 'react';
import { TbStar, TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

export function StarRating({totalRate, style}) {
    const stars = [...Array(5)];    // new Array(5)와 동일
    const color = (style === "star-coral") ? "coral" : "black";

    // totalRate 값의 범위를 정확히 정의 : 1 ~ 5
    let fillStars = 0, halfStar = 0, emptyStar = 0;
    if(totalRate > 0 && totalRate <= 5){
        fillStars = Math.floor(totalRate);    // 채워진 별 갯수
        halfStar = (totalRate%1) !== 0;   // 반별 여부 체크
        emptyStar = 5 - fillStars - (halfStar? 1 : 0);    // 빈별 갯수   
    }

    return (
        <div className='star-rating'>
            {/* fillStars : 채워진 별 추가 */}
            { [...Array(fillStars)].map((_, index) => 
                <span key={index} className={style.concat(" ", color)}>
                    <TbStarFilled />
                </span>
            )}

            {/* halfStar : 절반 별 추가 */}
            { halfStar && 
                <span key={halfStar} className={style.concat(" ", color)}>
                    <TbStarHalfFilled />
                </span>
            }

            {/* emptyStar : 빈 별 추가 */}
            { [...Array(emptyStar)].map((_, index) => 
                <span key={index} className={style.concat(" ", color)}>
                    <TbStar />
                </span>
            )}

            {/* 별점 표시 - 리뷰*/}
            {
                style === "star-black-big" &&
                <>
                    <span className={style.concat(" number")}>{totalRate} / </span>
                    <span className={style.concat(" tot-number")}>5</span>
                </>
            }

            {/* 별점 표시 */}
            {
                style === "star-coral" &&
                <>
                    <span className={style.concat(" number")}>{totalRate}</span>
                </>
            }
        </div>
    );
}

