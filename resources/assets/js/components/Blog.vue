<template>
	<div class="my-blog container full-height">
		<div class="row editor-toolbar">
			<div class="col-md-12">
				<a class="fa fa-bold"></a>
				<a title="Italic (Cmd-I)" class="fa fa-italic"></a>
				<a title="Strikethrough" class="fa fa-strikethrough"></a>
				<a title="Big Heading" class="fa fa-header fa-header-x fa-header-1 active"></a>
				<a title="Medium Heading" class="fa fa-header fa-header-x fa-header-2"></a>
				<a title="Small Heading" class="fa fa-header fa-header-x fa-header-3"></a>
				<i class="separator">|</i>
				<a title="Code (Cmd-⌥-C)" class="fa fa-code"></a>
				<a title="Quote (Cmd-')" class="fa fa-quote-left"></a>
				<a title="Generic List (Cmd-L)" class="fa fa-list-ul"></a>
				<a title="Numbered List (Cmd-⌥-L)" class="fa fa-list-ol"></a>
				<a title="Insert Table" class="fa fa-table"></a>
				<a title="Insert Horizontal Line" class="fa fa-minus"></a>
				<a title="Clean block (Cmd-E)" class="fa fa-eraser fa-clean-block"></a>
				<i class="separator">|</i>
				<a title="Insert Link" class="fa fa-link"></a>
				<a title="Insert Image" class="fa fa-image"></a>
				<i class="separator">|</i>
				<a title="Toggle Preview" class="fa fa-eye no-disable"></a>
				<a title="Side by side mode" class="fa fa-columns no-disable no-mobile"></a>
				<a title="Fullscreen mode" class="fa fa-arrows-alt no-disable no-mobile"></a>
				<i class="separator">|</i>
				<a title="Undo" class="fa fa-undo no-disable"></a>
				<a title="Redo" class="fa fa-repeat no-disable"></a>
				<i class="separator">|</i>
				<a title="Markdown Help" class="fa fa-question-circle"></a>
			</div>
		</div>
		<div class="row full-height markdown">
			<div class="col-md-6 area-input full-height">
				<div class="form-group">
					<textarea :value="input" @input="update" class="syncscroll form-control full-height" name="myscroll1"></textarea>
				</div>
			</div>
			<div class="col-md-6 preview full-height syncscroll" name="myscroll1">
				<VueMarkdown :source="input"></VueMarkdown>
			</div>
		</div>
	</div>
</template>

<script>
	import VueMarkdown from 'vue-markdown'
	export default {
		components: {
			VueMarkdown
		},
		data() {
			return {
				input: ''
			}
		},
		computed: {
			compiledMarkdown() {
				return this.input
			}
		},
		methods: {
		    update: _.debounce(function (e) {
		      this.input = e.target.value
		    }, 300)
		}
	}
</script>

<style lang="scss" scoped>
.separator {
    display: inline-block;
    width: 0;
    border-left: 1px solid #d9d9d9;
    border-right: 1px solid #fff;
    color: transparent;
    text-indent: -10px;
    margin: 0 6px;
}
.preview {
	background: white;
	border-radius: 5px;
	border: solid 1px #ddd;
	height: 90vh;
	overflow: auto;
}
.area-input {
	textarea {
		height: 90vh;
	}
}
.editor-toolbar {
	a {
		display: inline-block;
	    text-align: center;
	    text-decoration: none!important;
	    color: #2c3e50!important;
	    width: 30px;
	    height: 30px;
	    margin: 0;
	    border: 1px solid transparent;
	    border-radius: 3px;
	    cursor: pointer;
        line-height: 30px;
	    &:hover {
    	    background: #fcfcfc;
		    border-color: #95a5a6;
	    }
	}
}
.markdown {
	margin-top: 20px;
}
</style>