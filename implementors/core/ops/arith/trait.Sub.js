(function() {var implementors = {};
implementors["hashbrown"] = [{"text":"impl&lt;T, S&gt; Sub&lt;&amp;'_ HashSet&lt;T, S&gt;&gt; for &amp;HashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["indexmap"] = [{"text":"impl&lt;T, S1, S2&gt; Sub&lt;&amp;'_ IndexSet&lt;T, S2&gt;&gt; for &amp;IndexSet&lt;T, S1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S1: BuildHasher + Default,<br>&nbsp;&nbsp;&nbsp;&nbsp;S2: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl Sub&lt;PollOpt&gt; for PollOpt","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Into&lt;Ready&gt;&gt; Sub&lt;T&gt; for Ready","synthetic":false,"types":[]},{"text":"impl Sub&lt;UnixReady&gt; for UnixReady","synthetic":false,"types":[]}];
implementors["tokio"] = [{"text":"impl Sub&lt;Instant&gt; for Instant","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for Instant","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()