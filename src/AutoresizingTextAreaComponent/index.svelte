<script>
  import autoresize from './autoresize'

  const { children, ...props } = $props()
</script>

<textarea use:autoresize {...props}></textarea>
