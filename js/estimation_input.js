jQuery(document).ready(function() {
    let add = document.getElementById('add');

    add.addEventListener('click', function() {
        $('#detail_table tr:last').after(
           `<tr class="table_row">
                <td><span class="company">&nbsp</span></td>
                <td>
                    <input type="search" placeholder="상세 내용 추가" name="detail_contents">
                </td>
                <td>
                    <input type="text" name="price" value="원">
                </td>
            </tr>`
        );
    });
});