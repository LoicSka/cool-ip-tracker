<template>
  <button
    @click="onModeSwitch"
    class="toggle-switch"
    :class="{ 'toggle-switch--dark': isDarkModeEnabled }"
  >
    <div class="icon-wrap" :class="{ 'icon-wrap--rotated': isDarkModeEnabled }">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :style="{ display: isDarkModeEnabled ? 'none' : 'block' }"
      >
        <g filter="url(#filter0_b_226_37)">
          <path
            d="M9.1862 15.9999C7.51617 15.9867 5.90202 15.3988 4.61699 14.3357C3.33196 13.2726 2.45501 11.7997 2.13458 10.1662C1.81416 8.53276 2.06995 6.83912 2.85865 5.37202C3.64736 3.90493 4.92052 2.7545 6.46261 2.1155L6.75718 2L7.21594 2.44276L7.10488 2.74595C6.65178 3.88117 6.5421 5.12375 6.78939 6.32037C7.03668 7.51698 7.6301 8.61525 8.49643 9.47966C9.36276 10.3441 10.4641 10.9368 11.6645 11.1846C12.8649 11.4325 14.1119 11.3247 15.2515 10.8744L15.5412 10.7589L16 11.1921L15.8938 11.5145C15.3556 12.846 14.4283 13.9856 13.2322 14.7854C12.0362 15.5852 10.6265 16.0083 9.1862 15.9999Z"
            fill="#27303F"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_226_37"
            x="-2"
            y="-2"
            width="22"
            height="22"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_226_37"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_226_37"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :style="{ display: isDarkModeEnabled ? 'block' : 'none' }"
      >
        <path
          d="M9.4842 2.97107C9.4842 3.21088 9.2898 3.40528 9.04999 3.40528V3.40528C8.81018 3.40528 8.61578 3.21088 8.61578 2.97107V1.23423C8.61578 0.994421 8.81018 0.800018 9.04999 0.800018V0.800018C9.2898 0.800018 9.4842 0.994421 9.4842 1.23423V2.97107ZM13.6555 5.05859C13.4859 5.22816 13.211 5.22816 13.0414 5.05859V5.05859C12.8718 4.88902 12.8718 4.61409 13.0414 4.44452L14.2696 3.21639C14.4391 3.04682 14.714 3.04682 14.8836 3.21639V3.21639C15.0532 3.38596 15.0532 3.66088 14.8836 3.83045L13.6555 5.05859ZM15.1289 9.48423C14.8891 9.48423 14.6947 9.28983 14.6947 9.05002V9.05002C14.6947 8.81021 14.8891 8.61581 15.1289 8.61581H16.8658C17.1056 8.61581 17.3 8.81021 17.3 9.05002V9.05002C17.3 9.28983 17.1056 9.48423 16.8658 9.48423H15.1289ZM13.0414 13.6555C12.8718 13.4859 12.8718 13.211 13.0414 13.0414V13.0414C13.211 12.8719 13.4859 12.8719 13.6555 13.0414L14.8836 14.2696C15.0532 14.4392 15.0532 14.7141 14.8836 14.8836V14.8836C14.714 15.0532 14.4391 15.0532 14.2696 14.8836L13.0414 13.6555ZM8.61578 15.129C8.61578 14.8892 8.81018 14.6948 9.04999 14.6948V14.6948C9.2898 14.6948 9.4842 14.8892 9.4842 15.129V16.8658C9.4842 17.1056 9.2898 17.3 9.04999 17.3V17.3C8.81018 17.3 8.61578 17.1056 8.61578 16.8658V15.129ZM4.44449 13.0414C4.61406 12.8719 4.88899 12.8719 5.05856 13.0414V13.0414C5.22813 13.211 5.22813 13.4859 5.05856 13.6555L3.83042 14.8836C3.66085 15.0532 3.38593 15.0532 3.21636 14.8836V14.8836C3.04679 14.7141 3.04679 14.4392 3.21636 14.2696L4.44449 13.0414ZM2.97104 8.61581C3.21085 8.61581 3.40525 8.81021 3.40525 9.05002V9.05002C3.40525 9.28983 3.21085 9.48423 2.97104 9.48423H1.2342C0.994391 9.48423 0.799988 9.28983 0.799988 9.05002V9.05002C0.799988 8.81021 0.994391 8.61581 1.2342 8.61581H2.97104ZM5.05856 4.44452C5.22813 4.61409 5.22813 4.88902 5.05856 5.05859V5.05859C4.88899 5.22816 4.61406 5.22816 4.44449 5.05859L3.21636 3.83045C3.04679 3.66088 3.04679 3.38596 3.21636 3.21639V3.21639C3.38593 3.04682 3.66085 3.04682 3.83042 3.21639L5.05856 4.44452Z"
          fill="white"
          stroke="white"
        />
        <path
          d="M8.99984 12.4575C6.92458 12.4575 5.24225 10.7752 5.24225 8.69991C5.24225 6.62465 6.92458 4.94232 8.99984 4.94232C11.0751 4.94232 12.7574 6.62465 12.7574 8.69991C12.7574 10.7752 11.0751 12.4575 8.99984 12.4575Z"
          fill="white"
        />
      </svg>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    onModeSwitch: Function,
    isDarkModeEnabled: Boolean,
  },
};
</script>

<style scoped>
.toggle-switch {
  width: 38px;
  height: 38px;
  min-width: 38px;
  min-height: 38px;
  border-radius: 50%;
  background: white;
  box-shadow: 0px 0px 16px -4px rgba(0, 0, 0, 0.25);
  border: 1px solid white;
  outline: none;
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 10;
  border: none;
  cursor: pointer;
  transform: scale(1.1);
  transition: transform 0.2s ease-in;
  display: none;
}
.toggle-switch svg {
  height: 16px;
  width: 16px;
  transform: scale(1.1);
  transition: all 0.2s ease-in;
  opacity: 0.8;
}
.toggle-switch:hover,
.toggle-switch:hover svg {
  opacity: 1;
}
.toggle-switch:active,
toggle-switch:active svg {
  transform: scale(1);
}
.toggle-switch--dark {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  border: 1px solid rgba(74, 78, 83, 0.5);
  box-shadow: none;
}
.toggle-switch:hover,
.toggle-switch:hover {
  outline: none;
}
.icon-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: rotate(0deg);
}
.toggle-switch--dark .icon-wrap--rotated {
  transform: rotate(90deg);
}
@media (min-width: 640px) {
  .toggle-switch {
    display: block;
  }
}
</style>