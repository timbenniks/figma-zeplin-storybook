import MyButton from "./Button.vue";

export default {
  title: "My Amazing Design/Button",
  component: MyButton,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "I am a button",
};
