<template>
  <div>
    <ul class="item-list">
        <li :key="item.title" 
            v-for="item in listItems"
            class="post">
            <!-- 포인트 영역 -->
            <div class="points">
                {{ item.points || 0 }}
            </div>
            <!-- 기타 정보 영역 -->
            <div>
                <!-- 타이틀 영역 -->
                <p class="item-title">
                    <template v-if="item.domain">
                        <a :href="item.url">
                            {{ item.title }}
                        </a>          
                    </template>
                    <template v-else>
                        <router-link 
                            :to="`item/${item.id}`"
                            class="">
                            {{ item.title }}
                        </router-link>
                    </template>
                </p>
                <small class="link-text">
                    {{ item.time_ago }} by 
                    <!-- 유저 영역 -->
                    <router-link 
                        :to="`/user/${item.user}`"
                        v-if="item.user">
                        {{ item.user }}
                    </router-link>
                    <a :href="item.url"
                        v-else>
                        {{ item.domain }}
                    </a>
                </small>
            </div>
        </li>
    </ul>        
  </div>
</template>

<script>
export default {
    computed: {
        listItems() {
            return this.$store.state.list;
        }
    },
    
}
</script>

<style scoped>
.item-list {
    margin: 0;
    padding: 0;
}
.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.item-title {
    margin: 0;
}
.link-text {
    color: #828282;
}
</style>