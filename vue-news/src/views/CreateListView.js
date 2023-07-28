import ListView from './ListView.vue'
import bus from '../utils/bus';

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name,
        created() {
            // #1
            bus.$emit('start:spinner');
            this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
                // #5
                bus.$emit('end:spinner');
            })
            .catch((e) => console.log(e));
        },
        render(createElement) {
            return createElement(ListView);
        },
    }
}