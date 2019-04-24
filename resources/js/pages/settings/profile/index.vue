<template>
    <div>
        <general/>
        <password/>
    </div>
</template>

<script>
import General from './general'
import Password from './password'

export default {
    components: { Password, General },
    middleware: 'auth'
}
</script>
