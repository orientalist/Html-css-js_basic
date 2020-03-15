# Drag
1. From Html5
2. In Html5 all element are dragable
   1. Set dragable element with `dragabble='true'`
   2. Set function for `ondragstart` to set data to pass
   3. Set function for drop element for `ondragover` to prevent default action(preventing drop)
   4. Set function for drop element for `ondrop` to handle dropping action

```html
<div class="zone">
    <img
        id="drag"
        draggable="true"
        ondragstart="drag(event)"
        width="200"
        height="250"
        src="https://cdn.imgbin.com/8/9/3/imgbin-mask-of-tutankhamun-pharaoh-mummy-pharaonic-bLRxaXWMGP8rGcTwJuE3STbfe.jpg"
      />
</div>

<div class="zone" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

<script>
const drag = e => {
    //set data to pass when drop
    e.dataTransfer.setData("text", e.target.id);
};

const drop = e => {
    e.preventDefault();
    //get data from dragged data
    let data = e.dataTransfer.getData("text");
    e.target.append(document.getElementById(data));
};

const allowDrop = e => {
    e.preventDefault();
};
</script>    
```