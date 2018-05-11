<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <content-placeholders :rounded="true">
                  <content-placeholders-img />
                  <content-placeholders-heading />
                </content-placeholders>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
