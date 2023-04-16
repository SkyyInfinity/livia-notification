import success from './assets/img/success-icon.svg';

/**
 * Livia Notification
 * 
 * @description A simple toast notification library.
 * @author Dylan Hautecoeur (SkyyInfinity)
 * @link https://github.com/SkyyInfinity/livia-notification
 * @version 1.0.1
 * @license MIT
 * @example
 * import LiviaNotification from 'livia-notification';
 * const toast = new LiviaNotification();
 * toast.show('Hello World!');
 */
class LiviaNotification {
    // base
    options;
    message;

    // icons
    infoIcon = "";
    successIcon = success;
    warningIcon = "";
    errorIcon = "";

	constructor(options) {
		this.options = options;
        console.log('this.constructor', `Livia Notification is ready!`);
	}

    show(message, settings = {}) {
        this.message = message;
        console.log('this.show', this.message);
        this.create(settings);
    }

    create(settings) {
        const notification = document.createElement('div');
        const icon = document.createElement('img');
        notification.classList.add('livia');
        notification.innerHTML = this.message;
        icon.src = this.successIcon;
        notification.appendChild(icon);
        document.body.appendChild(notification);
        console.log('this.create', settings);
    }
}

export default LiviaNotification;
