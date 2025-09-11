import { useState, useEffect, useRef } from "react";
import { fetchKobisAPI, searchMoviePoster } from "../util/commonData.js";
import { BestProductImage } from "./shared/BestProductImage.jsx";
import { BestProductItem } from "./BestProduct.jsx";

export function Boxoffice() {

    const [list, setList] = useState([]);
    const hasRun = useRef(false);  // form체크할 때 쓰임

    useEffect(() => {
        if(!hasRun.current){    // true이면
            const fetchKobis = async () => {
                const kobis = await fetchKobisAPI("20250910");
                const mlist = kobis.boxOfficeResult.dailyBoxOfficeList;
                
                for(const movie of mlist){
                    if(movie.rank !== "10"){
                        const poster = await searchMoviePoster(movie.movieNm, movie.openDt);
                        const posterObj = {
                            "img": poster,
                            "rank": movie.rank,
                            "title": movie.movieNm,
                            "audiAcc":movie.audiAcc,
                            "like": true,
                            "icon": "❤",
                            "style": { "width":"600px", "height":"800px"},
                            "icon_style": { 
                                            "bg":"orange",
                                            "color":"#fff",
                                            "radius": "0",
                                            "width": "40px",
                                            "height": "40px"
                                          }
                        }
                        setList(prev => [ ...prev, posterObj]);   // 0 - prev(현재의 list): []
    
                    } 
                }
            }
    
            fetchKobis();
            hasRun.current = true;
        }

    }, []);

    console.log(list);    

    return (
        <>
            <h2>박스오피스</h2>
            <ul className="best-product">
                {list.map((item, index)=>  
                    (index === 0) ?
                        <li key={index}>
                            <BestProductImage 
                                img={item.img}
                                style={item.style}
                                rank={item.rank}
                                like={item.like}
                                icon={item.icon}
                                icon_style={item.icon_style}/></li>
                    : <li key={index}>
                            <BestProductItem 
                                item={item}/></li>
                )}
            </ul>
        </>
    );
}