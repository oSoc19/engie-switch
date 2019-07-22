
import config from '@/config'

function findToastController(component) {
  if(!component) {
    return null;
  }
  if(component.$refs.toastController) {
    return component.$refs.toastController;
  } else if(component.$parent) {
    return findToastController(component.$parent);
  } else {
    return null;
  }
}

function display(component, text) {
  let toastCtrl = findToastController(component);
  if(!toastCtrl) {
    return window.alert(text);
  }
  toastCtrl.create({
    // TODO style the component?
    cssClass: 'toast_error',
    duration: 3000,
    message: text,
    position: 'middle',
  }).then(toast => {
    toast.present();
  });
}

export default function(err) {
  let text = 'A network error occured!\n';
  text += err.message ? err.message : 'Do you have internet connection?';
  if(config.DEBUG) {
    window.console.log('error', err)
  }
  display(this, text)
}
