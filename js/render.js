import createNode from "./createNode.js";

export default function (where, what) {
  let frag = document.createDocumentFragment();

  what.forEach((user, index) => {
    let newUs = createNode(user, index + 1);

    console.log(newUs);
    frag.append(newUs);
  });

  where.innerHTML = "";
  where.append(frag);
}
