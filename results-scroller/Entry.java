import java.sql.Time;

public class Entry {
	private String first;
	private String last;
	private String fish;
	private double weight;
	private Time time;
	
	Entry(String first, String last, String fish, String weight, String time) {
		this.first = first;
		this.last = last;
		this.fish = fish;
		this.weight = Double.valueOf(weight);
		time = time.substring(0, time.length()-3);
		this.time = Time.valueOf(time);
	}

	public String getFirst() {
		return first;
	}
	
	public String getLast() {
		return last;
	}
	
	public String getFish() {
		return fish;
	}
	
	public Double getWeight() {
		return weight;
	}

	public Time getTime() {
		return time;
	}
	
}
