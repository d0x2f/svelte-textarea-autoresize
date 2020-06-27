<script>
  import AutoresizingTextArea, { autoresize } from './index'
</script>

<h4>Using the component</h4>
<AutoresizingTextArea
  id="textarea"
  placeholder="Type something long into me.."
/>
<br />
<h4>Using the exported `use`able function</h4>
<textarea
  id="textarea2"
  use:autoresize
  placeholder="Type something long into me.."
/>
