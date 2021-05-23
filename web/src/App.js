import './App.css';

function App() {
  return (
 <form clas = "tt" method = "POST">
  <h1>  Thông tin cá nhân</h1>
  <div class = "a">
    <aside>
    <label for ="pepHoten">Họ và tên :</label>
    </aside>
            
  <div class="b" >
  <div >
    <input aria-required="true" id="pepHoten" placeholder="Họ và tên" type="text" />
</div>
</div>
</div>
 <div class = "a">
    <aside>
    <label for ="pepGioitinh">Giới tính :</label>
    </aside>
            
  <div class="b" >
  <div >
    <input aria-required="true" id="pepGioitinh" placeholder="Giới tính" type="text" />
</div>
</div>
</div> <div class = "a">
    <aside>
    <label for ="pepdt">Số điện thoại :</label>
    </aside>
            
  <div class="b" >
  <div >
    <input aria-required="true" id="pepdt" placeholder="Số điện thoại" type="text" />
</div>
</div>
</div> <div class = "a">
    <aside>
    <label for ="pepemail">Email :</label>
    </aside>
            
  <div class="b" >
  <div >
    <input aria-required="true" id="pepemail" placeholder="Email" type="text" />
</div>
</div>
</div> <div class = "a">
    <aside>
    <label for ="pepGioitinh">Thành phố :</label>
    
     <input aria-required="true" id="pepGioitinh" placeholder="Nơi bạn đang sống" type="text"  />
</aside>

</div>                  
</form> 
  );
}

export default App;
