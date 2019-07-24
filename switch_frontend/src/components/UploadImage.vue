<template>
  <div class="image__uploader">
    <label class="preview__image" for="file">
      <div class="loading" :class="{hidden: !loading}">
        <img src="@/assets/img/loading.svg" />
      </div>

      <img id="img" ref="imagePreview"/>

      <div id="btnUploadImage" class="uploader__button" :class="{hidden: loading}">
        <input type="file" name="file" id="file" class="inputfile"
          ref="fileInput" @change="onFileChange" accept="image/jpeg" />
        <div class="uploadlabel" for="file" :class="{hidden: loading}">
          <svg viewBox="0 0 512 512">
            <path
              fill="#fff"
              d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"
            />
          </svg>
        </div>
      </div>
    </label>
  </div>
</template>
<script>
import api from '@/utils/api'
import error from '@/utils/error'
import image from '@/utils/image'

export default {
  name: "UploadImage",
  props: ['challengeId'],
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    onFileChange() {
      let files = this.$refs.fileInput.files
      if(files.length < 1) {
        // no file selected
        return;
      }
      this.loading = true;
      image.prepare(files[0], this.$refs.imagePreview, 500).then(resized => {
        this.uploadImage(resized)
      })
    },
    uploadImage(image) {
      let post = {
        image: image,
        user: '',
        challenge: this.challengeId,
        text: '',
      }
      api.getUser().then(user => {
        post.user = user._id;
        return api.postPost(post);
      }).then(() => {
        this.$router.push('/');
      }).catch(error.bind(this));
    }
  }
};
</script>

<style>

.image__uploader {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 10px 16px;
}

.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.inputfile + .uploadlabel {
  font-size: 16px;
  color: white;
  background-color: var(--primary-color);
  display: inline-block;
  padding: 0px;
  border-radius: 7px;
  width: 50px;
  height: 50px;
}

.inputfile:focus + .uploadlabel,
.inputfile:hover + .uploadlabel:hover {
  background-color: var(--primary-color);
  cursor: pointer;
}
.uploadlabel:hover {
  background-color: #fff;
}
.inputfile + .uploadlabel {
  cursor: pointer;
}
.uploader__button {
  opacity: 0.7;
  width: 50px;
  height: 50px;
  position: absolute;
  color: white;
}

.uploader__button svg {
  margin: 7px;
}
.uploadlabel {
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview__image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;

  border: 1.7px dashed lightgray;
  border-radius: 7px;

  max-height: 173px !important;
  height: 173px;
  margin-top: 0px !important;
  position: relative;

  cursor: pointer;
}

.preview__image img {
  max-width: 100% !important;
  display: flex;
  justify-content: center;
  max-height: 100% !important;
  height: 100%;
  border-radius: 7px;
}
.loading {
  position: absolute;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
}

.hidden {
  display: none;
}
</style>
