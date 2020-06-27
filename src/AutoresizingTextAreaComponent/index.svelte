<script>
  import autoresize from './autoresize'
  import { clean } from './utils'

  const props = clean($$props)
</script>

<textarea use:autoresize {...props} />
