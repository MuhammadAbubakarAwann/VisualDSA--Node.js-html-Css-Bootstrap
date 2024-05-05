
const outputDesDiv = document.getElementById('outputExplanation')
const codeDiv = document.getElementById('outputCode')

const outputDivCode = {
     pushText : `<pre>
    <ul type = none>
        <li>var newNode = new Node(val);</li>
    <li>if (!this.first) {
        this.first = newNode;
        this.last = newNode;
    } 
</li>
    <li>else {
        var temp = this.first;
        this.first = newNode;
        this.first.next = temp;
    }
</li>
    <li>this.size++;
</li>
    </ul>
</pre>`,

     popText : `<pre>
    <ul type = none>
        <li>var newNode = new Node(val);</li>
    <li>if (!this.first) {
        this.first = newNode;
        this.last = newNode;
    } 
</li>
    <li>else {
        var temp = this.first;
        this.first = newNode;
        this.first.next = temp;
    }
</li>
    <li>this.size++;
</li>
    </ul>
</pre>`
}




const insertOutputCode = (id, message) => {

   
}

