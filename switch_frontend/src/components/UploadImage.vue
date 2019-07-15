<template>
  <div class="image__uploader">
    <div class="preview__image" id="preview">
      <img src id="img" />
      <!-- <img src="../assets/img/laundry.jpg" id="img" /> -->

      <div class="uploader__button">
        <input type="file" name="file" id="file" class="inputfile" @change="onFileChange" />
        <label class="uploadlabel" for="file">
          <svg viewBox="0 0 512 512">
            <path
              fill="#fff"
              d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"
            />
          </svg>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import { checkImage } from "../utils";

export default {
  name: "UploadImage",
  data() {
    return {
      url: null
    };
  },
  methods: {
    async onFileChange() {
      let preview = document.getElementById("img");
      let file = document.querySelector("input[type=file]").files[0];
      let reader = new FileReader();
      let btnPost = document.getElementById("btnPost");

      // after loading good image, btn is clicked, so thats why it should be disabled on change
      btnPost.disabled = true;
      btnPost.style.color = "black";
      reader.addEventListener(
        "load",
        function() {
          preview.src = reader.result;
        },
        false
      );

      if (file) {
        reader.readAsDataURL(file);
      }
      //img => id of <img> tag
      checkImage("img").then(result => {
        if (result[0].className !== "Porn" && result[1].className !== "Porn") {
          btnPost.disabled = false;
          btnPost.style.color = "green";
        } else {
          btnPost.disabled = true;
          btnPost.style.color = "red";
        }
      });
    }
  }
};
</script>

<style>
@import "../css/variables.css";

.image__uploader {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10px;
}

.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.inputfile + label {
  font-size: 16px;
  color: white;
  background-color: var(--primary-color);
  display: inline-block;
  padding: 0px;
  border-radius: 7px;
  width: 50px;
  height: 50px;
}

.inputfile:focus + label,
.inputfile:hover + label:hover {
  background-color: var(--primary-color);
  cursor: pointer;
}
.uploadlabel:hover {
  background-color: #fff;
}
.inputfile + label {
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

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;

  border: 2px dashed var(--black);
  border-radius: 7px;

  max-height: 173px !important;
  height: 173px;
  margin-top: 10px !important;
  position: relative;
}

#preview img {
  max-width: 100% !important;
  display: flex;
  justify-content: center;
  max-height: 100% !important;
  height: 100%;
  border-radius: 7px;
}
</style>
