function showInstagramAlert(title, body, buttons, targets){
    $(function(){
	$("#alert").remove();
	// код для размещения алёрта
	let html = `
	<div id="alert" style="user-select: none;z-index: 1000; position: fixed; height: 100%; width: 100%; display: none; justify-content: center; align-items: center;background-color: rgba(0,0,0,.65);">
        <div style="max-width: 400px; width: calc(100% - 90px); min-width: 200px; background-color: white;border-radius: 12px;overflow: hidden;" class="alert">
            <div style="text-align: center;padding: 25px 30px;width: 100%; box-sizing: border-box;">
                <span class="altitle" style="font-size: 19px;font-weight: 700;">${title}</span>
                <span class="albody" style="display: block;margin-top: 7px;color: #8E8E8E;font-size: 15px;">${body}<span>
            </div>
        </div>
    </div>
	`;

	// начальные конфиги
	$("body").css("position", "relative");
	$("body").prepend(html);

	let ind = 0;

		let slo = {}
	buttons.forEach(function buts(b){
		// код одной кнопки по циклу
		let code = `
		<div id="${(ind + 1)*928}" class="bu" style="user-select: none;border: 0;cursor: pointer; font-size: 15px;position: relative; width: 100%;height: 47px;display: flex;justify-content: center;align-items: center;">
		<div style='position: absolute;top: 0; width: 100%;height: .5px;background-color: #adadad;'></div>
		${b}
        </div>
		`;

		// добавляем эту кнопку в алёрт
		$(".alert").append(code);

		slo[String((ind + 1)*928)] = targets[ind];

		// функция для этой кнопки
		$(`#${(ind + 1)*928}`).click(function(){
			slo[String($(this).attr("id"))]();
		});

		ind++;
	});

	// окончательно вызываем алёрт
    document.body.style.overflow = 'hidden';
    $("#alert").css("display", "flex");

     $("#alert").click(function(e){
        var target = $(e.target);
        if (!target.is("#alert")) return;
        hideAlert();
    });
    });
}

// скрыть алёрт
function hideAlert(){
    document.body.style.overflow = 'visible';
    $("#alert").css("display", "none");
}