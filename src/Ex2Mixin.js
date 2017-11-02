export const Ex2Mixin = {
    data() {
        return {
            mixinString: 'Append the length',
        }
    },
    computed: {
        appendLengthMixin() {
            var temp = this.mixinString + " (" + this.mixinString.length + ")";
            return temp;
        }
    }
};