<template>
    <div class="contact-us">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
        <div class="container">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    <small id="emailHelp" class="form-text text-muted"
                        >We'll never share your email with anyone else.</small
                    >
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">subject</label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">your Message</label>
                    <textarea
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                   > </textarea>
                </div>
                <div class="form-group form-check">
                    <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1"
                        >Check me out</label
                    >
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            pageName: "Contact-us",
            pageDescription: "This is contact-us Page"
        };
    },
    name: "Contact"
};
</script>
