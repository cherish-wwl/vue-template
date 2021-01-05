<template>
	<div>{{ msg }}</div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class Test extends Vue {
	msg: string = "Test"
}
</script>