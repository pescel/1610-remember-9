export default function() {
  this.get('/reminders');
  this.patch('/reminders/:id');
  this.post('/reminders');
  this.get('/reminders/:id');
  this.put('/reminders/:id');
  this.del('/reminders/:id');
}
