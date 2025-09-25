import React from 'react';
import { ImageList } from '../commons/ImageList.jsx';

/**
 * ProductDetail > Detail
 */

export function Detail({imgList, info}) {
    // console.log(imgList, info);
    
    return (
        <div>
            <DetailImages imgList={imgList} />
            <DetailInfo info={info} />
        </div>
    );
}

/**
 * ProductDetail > Detail > DetailImages
 */
export function DetailImages({imgList}) {
    return (
        <div className='detail-images'>
            <div style={{padding: "20px"}}></div>
            <img src='/images/holidays_notice.jpg' alt='notice' />
            <ImageList imgList={imgList}
                    className='detail-images-list'/>
        </div>
    );
}

/**
 * ProductDetail > Detail > DetailInfo
 */
export function DetailInfo({info}) {
    // console.log(info);
    
    return (
        <div className='detail-info'>
            <h4 className='detail-info-title-top'>
                {info && info.title_en} / {info && info.title_ko}
                {info && info.list.map((item, index) => 
                    <div key={index}>
                        <h5 className='detail-info-title'>[{item.title}]</h5>
                        {item.title === "SIZE" || item.title === "MODEL SIZE" ? 
                            <ul className='nolist'>
                                <li>{item.type}</li>
                                { item.title === "MODEL SIZE" &&
                                    <>
                                    <li>{item.height}</li>
                                    <li>{item.size}</li>
                                    </>
                                }
                                { item.title === "SIZE" &&
                                    <>
                                    <li>총 길이 : {item.totalLength}</li>
                                    <li>어깨 너비 : {item.shoulderWidth}</li>
                                    <li>가슴 너비 : {item.chestWidth}</li>
                                    <li>소매 길이 : {item.sleeveLength}</li>
                                    <li>소매 밑단 : {item.sleeveHemWidth}</li>
                                    <li>밑단 너비 : {item.hemLength}</li>
                                    <li>암홀 : {item.armhole}</li>
                                    </>
                                }
                            </ul>
                         :
                            <ul className='list nolist'>
                                { item.title === "FABRIC" &&
                                    <>
                                        <li>Color : {item.color}</li>
                                        <li>{item.material}</li>
                                    </>
                                }
                                {
                                    item.description && item.description.map((desc, index) => 
                                        <li key={index}>{desc}</li>
                                    )
                                }
                            </ul>
                        }
                    </div>
                )}
            </h4>
        </div>
    );
}