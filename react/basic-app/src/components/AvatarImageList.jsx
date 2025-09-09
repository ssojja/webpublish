/**
 * AvatarImage 컴포넌트를 반복시키는 컨테이너 컴포넌트
 */
export function AvatarImageList({imgList}) {

    return (
        <>
            {
                imgList.map((item, index) => 
                    <img key={index} src={item.img} className={item.style} />
            )}
        </>
    );
}