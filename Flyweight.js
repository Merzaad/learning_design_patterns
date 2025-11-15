const icons = {};

function getIcon(type) {
  if (!icons[type]) {
    icons[type] =
      type === "heart"
        ? "M10 20L..." 
        : "M5 5L...";
  }
  return icons[type];
}

function renderIcon(type, color, size) {
  const svgPath = getIcon(type);
  return '<svg width="' + size + '" height="' + size + '">' +
           '<path d="' + svgPath + '" fill="' + color + '" />' +
         '</svg>';
}

console.log(renderIcon("heart", "red", 24));
console.log(renderIcon("heart", "blue", 32));
console.log(renderIcon("star", "yellow", 24));
