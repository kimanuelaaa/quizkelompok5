function resizeBoxes() {
	const boxes = document.querySelectorAll('.box');
	boxes.forEach(box => {
	  box.style.width = `${(document.documentElement.clientWidth - 150) / 4}px`;
	  box.style.height = `${(document.documentElement.clientHeight - 150)}px`;
	});
  }
