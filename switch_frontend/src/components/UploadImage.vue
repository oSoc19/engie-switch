<template>
  <div class="image__uploader">
    <div class="preview__image" id="preview">
      <img src id="img" />
      <!-- <img src="../assets/img/laundry.jpg" id="img" /> -->
    </div>

    <div class="uploader__button">
      <input type="file" name="file" id="file" class="inputfile" @change="onFileChange" />
      <label class="uploadlabel" for="file">Choose a image</label>
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
  width: 100%;
  padding: 20px 0px;
  border-radius: 7px;
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
  margin-top: 5px;
  width: 95%;
}

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  border: 2px dashed var(--black);
  border-radius: 7px;

  max-height: 173px !important;
  height: 173px;
  margin-top: 10px !important;
}

#preview img {
  max-width: 100% !important;
  width: auto !important;

  display: flex;
  justify-content: center;
  height: 100%;
  border-radius: 7px;
}
</style>
