<template>
  <div
    class="ip-form-wrap"
    :class="{ 'ip-form-wrap--dark': isDarkModeEnabled }"
  >
    <form v-on:submit.prevent="handleIPSearch" class="ip-form">
      <div class="input-wrap">
        <div class="icon-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              :style="{ fill: isDarkModeEnabled ? '#FFFFFF' : '#4F555F' }"
              d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
            />
          </svg>
        </div>
        <input
          autofocus="true"
          v-model="address"
          placeholder="Enter an IP address"
        />
        <div class="icon-wrap">
          <div v-if="isLoading" class="sp sp-circle"></div>
        </div>
        <div class="mode-switch-wrap">
          <ModeSwitchToggle
            :onModeSwitch="onModeSwitch"
            :isDarkModeEnabled="isDarkModeEnabled"
          />
        </div>
      </div>
      <div class="error-msg" :class="{ 'error-msg--expanded': hasError }">
        <div class="error-msg__text-wrap">
          <span class="error-msg__text">{{ errorText }}</span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { getGeolocationData } from "../../services/ipgeolocation";
import isEmpty from "lodash/isEmpty";
import ModeSwitchToggle from "../Map/ModeSwitchToggle";

// Unfortunately this is Paying feature
// validHostnameRegex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/

const validIpAddressRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,
  classCAddressRegex = /(^127\.)|(^10\.)|(^172\.1[6-9]\.)|(^172\.2[0-9]\.)|(^172\.3[0-1]\.)|(^192\.168\.)/;

export default {
  components: {
    ModeSwitchToggle,
  },
  props: {
    isDarkModeEnabled: Boolean,
    onSetPinCoordinates: Function,
    onSetLocationData: Function,
    onModeSwitch: Function,
  },
  data() {
    return {
      address: "",
      errorText: null,
      isLoading: true,
      submitedValue: null,
    };
  },
  methods: {
    isValidAddress: function (address) {
      return validIpAddressRegex.test(address);
    },
    isPrivateAddress: function (address) {
      return classCAddressRegex.test(address);
    },
    isFormValid: function () {
      this.submitedValue = this.address;
      if (isEmpty(this.address)) {
        this.errorText = "Address/domain cannot be empty";
        return false;
      } else if (!this.isValidAddress(this.address)) {
        this.errorText = "Invalid address/domain";
        return false;
      } else if (this.isPrivateAddress(this.address)) {
        this.errorText = "Address provided is private/class C";
      } else {
        if (!isEmpty(this.errorText)) {
          this.errorText = null;
        }
      }
      return true;
    },
    handleIPSearch: async function () {
      if (this.isFormValid()) {
        try {
          const data = await getGeolocationData(this.address);
          console.log({ ...data });
          this.onSetLocationData(data);
        } catch (error) {
          this.errorText = "We failed to retrieve address/domain data";
        }
      }
      this.isLoading = false;
    },
  },
  created: async function () {
    const { ip } = await getGeolocationData();
    this.address = ip;
    this.handleIPSearch();
  },
  computed: {
    hasError: function () {
      return this.submitedValue === this.address && !isEmpty(this.errorText);
    },
  },
};
</script>

<style scoped>
.ip-form-wrap {
  position: absolute;
  z-index: 10;
  width: 100vw;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ip-form {
  width: calc(100% - 40px);
  max-width: 400px;
  background: white;
  box-shadow: 0px 0px 16px -4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  margin-top: 20px;
  overflow: hidden;
  color: #4F555F;
}

.ip-form-wrap--dark .ip-form {
  border: 1px solid rgba(104, 128, 154, 0.5);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  box-shadow: none;
  border: 1px solid rgba(74, 78, 83, 0.5);
  color: white;
}
.input-wrap {
  width: 100%;
  display: flex;
  align-items: center;
}
.input-wrap input {
  flex: 1;
  border: none;
  background: transparent;
  height: 50px;
  font-size: 1rem;
}
.input-wrap input:focus {
  outline: none;
}
.ip-form-wrap--dark input {
  color: white;
}
.error-msg {
  width: 100%;
  height: 30px;
  background: #FE4242;
  position: relative;
  max-height: 0;
  overflow: hidden;
}
.error-msg--expanded {
  max-height: 30px;
  transition: all 0.2s ease-in;
}
.error-msg .error-msg__text-wrap {
  position: absolute;
  bottom: 0;
  top: auto;
  width: 100%;
  height: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.error-msg .error-msg__text {
  padding: 0;
  margin: 0;
  font-size: 0.96rem;
}
.icon-wrap {
  min-width: 20px;
  height: 20px;
  padding: 0 15px;
}
.mode-switch-wrap {
  min-width: 20px;
  height: 20px;
  padding: 0 15px;
}
@media (min-width: 640px) {
  .ip-form {
    width: 400px;
  }
  .mode-switch-wrap {
    display: none;
  }
}
</style>