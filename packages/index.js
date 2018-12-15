import Avatar from "./avatar/index.js";
import Icon from "./icon/index.js";
import Loader from "./loader/index.js";
import $Popover from "./popover/index.js";
import Spinner from "./spinner/index.js";
import $Toast from "./toast/index.js";
import $Message from "./message/index.js";
import $LoadingBar from "./loading-bar/index.js";
import Upload from "./uplaoder/index.js";
import Dropdown from "./dropdown/index.js";
import Tooltip from "./tooltip/index.js";
import Card from "./card/index.js";
import Alert from "./alert/index.js";
import Input from "./input/index.js";
import Textarea from "./textarea/index.js";
import Image from "./image/index.js";
import Heading from "./heading/index.js";
import { Row, Col } from "./layout/index.js";
import { Button, ButtonGroup } from "./button/index.js";
import { Accordion, AccordionItem } from "./accordion/index.js";
import Checkbox from "./checkbox/index.js";
import Radio from "./radio/index.js";
import Tag from "./tag/index.js";
import Hightlight from "./highlight/index.js";
import Hr from "./hr/index.js";
import { Backdrop, $Cover } from "./backdrop/index.js";
import Autocomplete from "./autocomplete/index.js";
import Loading from "./loading/index.js";
import Mask from "./mask/index.js";
import { Confirm, $Confirm } from './confirm/index.js'
import { Modal, $Modal } from './modal/index.js'
import V from "./v/index.js";
import Progress from './progress/index.js'
import Marquee from './marquee/index.js'
import Share from './share/index.js'
import Typer from './typer/index.js'
import Carousel from './carousel/index.js'
import Countdown from './countdown/index.js'
import SlidePanel from './slide-panel/index.js'
import Sticky from './sticky/index.js'
const components = [
  Avatar,
  Icon,
  V,
  Loader,
  Spinner,
  Upload,
  Dropdown,
  Alert,
  Row,
  Col,
  Card,
  Input,
  Image,
  Heading,
  Button,
  ButtonGroup,
  Checkbox,
  Radio,
  Accordion,
  AccordionItem,
  Autocomplete,
  Tag,
  Hr,
  Backdrop,
  Textarea,
  Modal,
  Confirm,
  Progress,
  Marquee,
  Share,
  Typer,
  Carousel,
  Countdown,
  SlidePanel
];


const install = function(Vue) {
  if (install.installed) return;
  components.forEach(component => Vue.component(component.name, component));
  Vue.prototype.$Popover = $Popover;
  Vue.prototype.$Toast = $Toast;
  Vue.prototype.$Cover = $Cover;
  Vue.prototype.$Modal = $Modal;
  Vue.prototype.$Confirm = $Confirm;
  Vue.prototype.$Message = $Message;
  Vue.prototype.$LoadingBar = $LoadingBar;
  Vue.directive(Tooltip.name, Tooltip);
  Vue.directive(Hightlight.name, Hightlight);
  Vue.directive(Loading.name, Loading);
  Vue.directive(Mask.name, Mask);
  Vue.directive(Sticky.name, Sticky)
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Avatar,
  Icon,
  Loader,
  Spinner,
  Upload,
  Dropdown,
  Tooltip,
  Row,
  Col,
  Card,
  Alert,
  Input,
  Image,
  Heading,
  Button,
  ButtonGroup,
  Checkbox,
  Radio,
  Accordion,
  AccordionItem,
  Autocomplete,
  Tag,
  Hr,
  Backdrop,
  Textarea,
  V,
  Progress,
  Marquee,
  Share,
  Typer,
  Carousel,
  Countdown,
  SlidePanel,
  Sticky,
  $Popover,
  $Toast,
  $Cover,
  $Modal,
  $Confirm,
  $Message,
  $LoadingBar
};
