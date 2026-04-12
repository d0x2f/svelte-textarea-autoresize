<script>
  import autoresize from './autoresize'

  let {
    children,
    value = $bindable(''),
    disabled = false,
    name = undefined,
    placeholder = undefined,
    readonly = false,
    class: className = undefined,
    ...props
  } = $props()
</script>

<textarea
  use:autoresize
  bind:value
  {disabled}
  {name}
  {placeholder}
  {readonly}
  class={className}
  {...props}
></textarea>
