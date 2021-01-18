
public class Winner {
	
	private Entry entry;
	private Prize prize;
	
	Winner(Entry entry, Prize prize) {
		this.entry = entry;
		this.prize = prize;
	}
	
	public Entry getEntry() {
		return entry;
	}
	
	public Prize getPrize() {
		return prize;
	}
}
