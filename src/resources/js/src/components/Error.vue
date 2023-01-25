<template>
    <div class="error-text">
        <div v-for="(error, i) in errors"
            :key="`error__${i}`"
            class="text-danger error"
        >
            {{ error }}
        </div>
    </div>
</template>

<script>

export default {
    name: "ErrorText",

    props: {
        errors: {
            type: Array,
            deafult: []
        }
    }
}
</script>
