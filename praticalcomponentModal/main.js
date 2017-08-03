Vue.component('modal', {
  props: ['title', 'body'],
  data() {
    return {
      isVisible: true
    }
  },
  template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <!-- Any other Bulma elements you want -->
                <div class="box">
                    <p>
                        Loren ipsum dolor sit amet, consectetur adipisicing elit, sed do Loren ipsum dolor sit amet, consectetur adipisicing elit, sed do Loren ipsum dolor sit amet, consectetur adipisicing elit, sed do Loren ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do Loren ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    </p>
                    <button class="modal-close is-large" @click="$emit('close')"></button>
                </div>
            </div>
        </div>
             `,
  methods: {
    hideModal() {
      this.isVisible = false;
    }
  }
});

new Vue({
  el: '#root',

  data: {
    showModal: false
  }
});