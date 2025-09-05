window.addEventListener('DOMContentLoaded', function() {
    createTable('all');
    filterMenuEvent();
})

function filterMenuEvent() {
    let menuList = document.querySelectorAll(".filter-menu a");
    menuList.forEach((menu) => {
        // 버튼 이벤트 추가
        menu.addEventListener('click', () => {
            let type = menu.id;
            // filterData(type);
            createTable(type);
        });

    })
}

async function filterData(type) {
    let list = await getData();
    let filterList = list.filter((item) => item.type === type);
    console.log(filterList);
    return filterList;
}

async function getData() {
    let response = await fetch("../data/support.json");
    return response.json();
}

async function createTable(type) {
    let list = null;
    if(type === 'all'){
        list = await getData();
    } else {
        list = await filterData(type);
    }
    console.log(list);
    
    let output = `
        <table class="stable">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>구분</th>
                    <th>제목</th>
                    <th>등록일</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                ${ list.map((item, index) => `
                    <tr class="itemInfo">
                        <td>${index + 1}</td>
                        <td>[${item.type}]</td>
                        <td><a href="#">${item.title}</a></td>
                        <td>${item.rdate}</td>
                        <td>${item.hits}</td>
                    </tr>   
                `).join("")}
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5">1 2 3 4 5 >> </td>
                </tr>
            </tfoot>
        </table>
    `;
    document.querySelector(".stable")?.remove();
    document.querySelector("#before-table").insertAdjacentHTML('afterend', output);
}