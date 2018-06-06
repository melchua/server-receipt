function projectsBuilder () {
  let projects  = [];
  receipts.forEach (function(i) {
    if !projects.includes(i.project_name) {
      projects.push(i.project_name)
    }
  })
  this.setState({projects})
}