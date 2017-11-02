<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <p v-local-listen:type="'mouseover'">Listening for events. the argument type determines which type of event to listen for</p>

            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p> {{ "This is reversed" | reverse}} </p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p> {{ "append the length" | append-length}} </p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p> {{ reverseString }} </p>
                <p> {{ appendLength }} </p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <p>{{ appendLengthMixin }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {Ex2Mixin} from './Ex2Mixin';
    export default {
        data() {
            return{
                appendLengthString: 'Append the length',
                reverseStringVar: 'This is reversed',
            }
        },
        directives: {
            'local-listen': {
                bind(el, binding, vnode) {
                    //var reverseString = binding.value.split("").reverse().join("");
                    //alert();
                    if(binding.arg == 'type'){
//                        el.innerHTML = reverseString;
//                        el.style.backgroundColor = binding.value;

                        if(binding.value == 'mouseover'){
                            el.addEventListener("mouseover", function(){ alert("Mouse Over!"); });

                        }else if(binding.value == 'click'){
                            el.addEventListener("click", function(){ alert("Clicked!"); });
                        }else if(binding.value == 'mouseout'){
                            el.addEventListener("mouseout", function(){ alert("Mouse Out!"); });
                        }

                    }
                }
            }
        },
        filters: {
            reverse(value){
                return value.split("").reverse().join("");
            }
        },
        computed: {
            reverseString() {
                return this.reverseStringVar.split("").reverse().join("");
            },
            appendLength() {
                var temp = this.appendLengthString + " (" + this.appendLengthString.length + ")";
                return temp;
            }

        },
        mixins: [Ex2Mixin]
    }
</script>

<style>
</style>
