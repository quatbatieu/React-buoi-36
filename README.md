# React

- [https://reactjs.org/](https://reactjs.org/)
- React là một thư viện Javascript để xây dựng giao diện người dùng.
- React hỗ trợ xây dựng trang web theo hướng single page application (SPA) [https://toidicodedao.com/2018/09/11/su-khac-biet-giua-server-side-rendering-va-client-side-rendering](https://toidicodedao.com/2018/09/11/su-khac-biet-giua-server-side-rendering-va-client-side-rendering)
- VSCode extensions:
  ◦ [https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
  ◦ [https://marketplace.visualstudio.com/items?itemName=riazxrazor.html-to-jsx](https://marketplace.visualstudio.com/items?itemName=riazxrazor.html-to-jsx)
- Browser extensions:
  ◦ [https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

## 1. Create-react-app

- [https://create-react-app.dev/](https://create-react-app.dev/)
- Cài đặt: npx create-react-app project-name
- CRA cung cấp bộ công cụ khởi tạo ứng dụng React, vì vậy bạn có thể đi vào xây dựng ứng dụng của mình mà không cần phải xử lý các cấu hình Webpack và Babel.

## 2. Component

- Components giúp phân chia những đoạn code của UI (giao diện người dùng) thành các phần độc lập để dễ dàng quản lý và tái sử dụng.
- Về cơ bản, component cũng giống một javascript function return về những phần tử React mô tả những gì sẽ xuất hiện trên giao diện.
- Luôn luôn bắt đầu component name với chữ cái in hoa React sẽ coi những component bắt đầu với chữ cái in thường là DOM tags. Ví dụ, `<div />` đại diện cho 1 thẻ div HTML, nhưng `<Welcome />` đại diện cho 1 component
- Có 2 loại component

```jsx
// Function component
function App() {
  return (
    <div>Hello World!!!<div>
  )
}
```

```jsx
// Class component
class App() {
  render() {
    return (
      <div>Hello World!!!<div>
    )
  }
}
```

- Snippets để tạo nhanh component:
- Function component: `rafce`, `rfce`
- Class component: `rcc`

## 3. JSX

- JSX = Javascript + XML
- React sử dụng JSX để biểu thị UI components
- JSX cho phép viết các phần tử HTML bằng JavaScript và đặt chúng trong DOM mà không cần bất kỳ phương thức như createElement() hoặc appendChild().
- Cú pháp JSX

```jsx
const title = "BC27 - React";
const jsx = (
  <section className="container">
    <h1>{title}</h1>
  </section>
);
```

- Code JSX nếu được viết bằng Javascript thuần

```jsx
const title = "BC27 - React";
const jsx = React.createElement(
  "section",
  { className: "app" },
  React.createElement("h1", null, title)
);
```

- Vì JSX gần với JavaScript hơn là so với HTML, React sử dụng chuẩn quy tắc đặt tên camelCase cho thuộc tính thay vì dùng tên thuộc tính gốc của HTML.

```jsx
/* className thay cho class */
<h1 className="title">Hello World!!!<div>

/* htmlFor thay cho for */
<label htmlFor="username">Username</label>
<input type="text" id="username" />
```

## 3. Event

- Các sự kiện trong React được đặt tên bằng camelCase, thay vì chữ thường. Ví dụ: onclick -> onClick, onchange -> onChange
- Với JSX, truyền một hàm làm trình xử lý sự kiện, thay vì một chuỗi.

```jsx
// html
<button onclick="handleClick()">
  Clicker
</button>

// jsx
<button onClick={handleClick}>
  Clicker
</button>
```

- Tổng hợp những sự kiện được hỗ trợ trong react: https://reactjs.org/docs/events.html
- Để truyền tham số vào cho các hàm xử lý sự kiện

```jsx
// Cách 1: Sử dụng arrow function
<button onClick={(e) => this.showMessage(e, "Hello BC27")}>Show Message</button>
// Cách 2: Sử dụng bind
<button onClick={this.showMessage.bind(this, id)}>Show Message</button>
```

- Khi sử dụng class component, cần lưu ý từ khoá this bên trong các hàm xử lý sự kiện

```jsx
class App extends React.Component {
  message = "Reactjs - BC27";

  showMessage() {
    // throw error vì this là undefined
    alert(this.message);
  }

  render() {
    return <button onClick={this.showMessage}>Show Message</button>;
  }
}

// Để khắc phục ta có 2 cách
// Cách 1: Viết hàm showMessage theo dạng arrow function
showMessage = () => {
  alert(this.message);
};
// Cách 2: Cần bind this của component vào trong hàm showMessage trong constructor
constructor() {
  super()
  this.showMessage = this.showMessage.bind(this)
}
```

### 4. State

- State là một object đặc biệt dùng để lưu trữ dữ liệu cho component, mỗi khi state thay đổi component đó sẽ được render lại.
- State được dùng để phản hồi các yêu cầu từ người dùng, hay lưu trữ một dữ liệu nào đó trong component.
- Để sử dụng state ta cần sử dụng class component

```jsx
class App extends Component {
  constructor() {
    super();
    // Khởi tạo state
    this.state = { message: "Hello Cybersoft" };
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
```

- Không được thay đổi trực tiếp giá trị của state mà phải thông qua hàm setState

```jsx
this.setState({
  message: "Frontend Bootcamp 27",
});
```

- Vì state có thể được cập nhật không đồng bộ, nếu cần lấy kết qua sau khi setState ta sẽ lấy trong tham số thứ 2 của hàm setState là 1 callback function

```jsx
constructor() {
  super()
  this.state = {
    message: ""
  }
}

this.setState({ message: "Hello" }, () => {
  console.log(this.state.message); // "Hello"
});

console.log(this.state.message); // ""
```

- Bởi state có thể được cập nhật không đồng bộ, ta không nên dựa vào giá trị của chúng để tính toán cho giá trị mới của state.

```jsx
// Wrong
this.setState({
  counter: this.state.counter + 1,
});

// Correct
this.setState((state) => ({
  counter: state.counter + 1,
}));
```

### 5. Props

- Props là từ viết ngắn gọn của properties.
- Props là các tham số được truyền vào cho component thông qua các thuộc tính HTML.
- Mỗi components sẽ nhận vào một object props và trả về react element mô tả những gì sẽ xuất hiện trên màn hình.
- Props cho phép chúng ta giao tiếp giữa các components với nhau.
- Component nhận props chỉ dùng để đọc (read-only), không bao giờ được thay đổi giá trị của props.

```jsx
// Truyền props cho component Welcome
<Welcome name="John" age={18} />;

// Nhận giá trị của props trong function component bằng params
const Welcome = (props) => {
  console.log(props); // { name: "John", age: 18 }
  return (
    <div>
      <h1>Xin chào {props.name}!</h1>
    </div>
  );
};

// Nhận giá trị của props trong class component bằng this.props
class Welcome extends Component {
  render() {
    console.log(this.props); // { name: "John", age: 18 }
    return (
      <div>
        <h1>Xin chào {this.props.name}!</h1>
      </div>
    );
  }
}
```
