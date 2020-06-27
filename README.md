# Svelte Textarea Autoresize

An autoresizing textarea component that adjusts it's height based on it's content.
Based on the wonderful [andarist/react-textarea-autoresize](https://github.com/Andarist/react-textarea-autosize).

## Install

```sh
$ npm install svelte-textarea-autoresize
```

## Use

You can either use the component as is:

```html
<script>
  import AutoresizingTextArea from 'svelte-textarea-autoresize'
</script>

<AutoresizingTextArea placeholder="Type something long into me.." />
```

or by using the exported `autoresize` function on your existing component like so:

```html
<script>
  import { autoresize } from 'svelte-textarea-autoresize'
</script>

<textarea use:autoresize placeholder="Type something long into me.." />
```
