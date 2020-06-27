<script>
  import AutoresizingTextArea, { autoresize } from './index'
</script>

<style>
  #textarea {
    width: 200px;
    resize: none;
    border-width: 2px;
    border-radius: 5px;
    border-style: solid;
    border-color: #0066;
    padding: 8px;
    box-sizing: border-box;
  }
</style>

<h1>Svelte Textarea Autoresize</h1>
<p>An automatically resizing textarea dependign on it's content.</p>
<p>
  <a href="https://github.com/d0x2f/svelte-textarea-autoresize">GitHub</a>
  <a href="https://www.npmjs.com/package/svelte-textarea-autoresize">NPM</a>
</p>

<h2>Example</h2>
<p>
  Type a long string into the box bellow and it'll change in height
  automatically as you type.
</p>
<textarea use:autoresize id="textarea" placeholder="Type something long.." />
