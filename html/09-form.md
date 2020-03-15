# form
1. `<form></form>`
   1. `action`
      1. the url for this form to pass data
      2. if no this attribute, default is now page
   2. `method`
      1. the method of this form to pass data
         1. `post`
         2. `get`
            1. use when the data is not sensitive
            2. data will be concated in url
   3. `accept-charset`-the charset of the form
   4. `autocomplete`-default is on,will auto fill when inserting
   5. `encrypt`-default is url-encoded will encrypt the form data
   6. `novalidate`-will the browser validate the form
   7. `target`-default is _self ,the place to show result
2. `<fieldset>`
   1. can set input as group and out of form
   2. `form`-the form it belong
   3. `disabled`-the all elements under it will get the setting
   4. `name`-name for fieldset
   5. `<legend>`-to set title for fieldset
3. `<datalist>`
   1. the select will show when the input with `list` equal to id of this click
   ```html
   <form action="/demo/demo_form.asp">
      <input list="browsers" name="browser">
      <datalist id="browsers">
      <option value="Internet Explorer">
      <option value="Firefox">
      <option value="Chrome">
      <option value="Opera">
      <option value="Safari">
      </datalist>
      <input type="submit">
   </form>
   ```
   <form action="/demo/demo_form.asp">
      <input list="browsers" name="browser">
      <datalist id="browsers">
      <option value="Internet Explorer">
      <option value="Firefox">
      <option value="Chrome">
      <option value="Opera">
      <option value="Safari">
      </datalist>
      <input type="submit">
   </form>